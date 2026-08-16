
import os, json, re
from typing import Type
import firebase_admin
from firebase_admin import credentials, db
from crewai.tools import BaseTool
from pydantic import BaseModel, Field

DB_URL = 'https://the-northstar-group-project-default-rtdb.asia-southeast1.firebasedatabase.app'

def _init_firebase():
    if firebase_admin._apps:
        return
    creds_json = os.environ.get('FIREBASE_CREDENTIALS_JSON')
    if not creds_json:
        raise EnvironmentError('FIREBASE_CREDENTIALS_JSON not set')
    cred = credentials.Certificate(json.loads(creds_json))
    firebase_admin.initialize_app(cred, {'databaseURL':
os.environ.get('FIREBASE_DATABASE_URL', DB_URL)})

class FirebaseInventoryInput(BaseModel):
    query: str = Field(..., description='Plain-English query: all
products, product named X, SKU Y, in stock, under 50')

class FirebaseInventoryTool(BaseTool):
    name: str = 'firebase_inventory_tool'
    description: str = 'Query live Northstar inventory from Firebase.
Returns JSON. If not found, report as not found.'
    args_schema: Type[BaseModel] = FirebaseInventoryInput

    def _run(self, query: str) -> str:
        try:
            _init_firebase()
        except EnvironmentError as exc:
            return json.dumps({'found': False, 'error': str(exc),
'records': []})
        try:
            path = os.environ.get('FIREBASE_INVENTORY_PATH', 'inventory')
            data = db.reference(path).get()
        except Exception as exc:
            return json.dumps({'found': False, 'error': str(exc),
'records': []})
        if data is None:
            return json.dumps({'found': False, 'message': 'Inventory
node empty.', 'records': []})
        records = [{'_id': k, **v} for k, v in data.items() if
isinstance(v, dict)] if isinstance(data, dict) else [r for r in data
if isinstance(r, dict)]
        q = query.lower().strip()
        if any(kw in q for kw in ('all', 'full', 'list', 'every', 'catalog')):
            return json.dumps({'found': bool(records), 'count':
len(records), 'records': records})
        stops =
{'the','product','item','find','show','get','what','about','is','are','do','you','have','any','for'}
        tokens = [t for t in re.split(r'\W+', q) if len(t)>2 and t not in stops]
        if tokens:
            h = [r for r in records if any(t in '
'.join([str(r.get('name','')), str(r.get('category',''))]).lower() for
t in tokens)]
            if h: return json.dumps({'found': True, 'count': len(h),
'records': h})
        return json.dumps({'found': bool(records), 'count':
len(records), 'records': records})
