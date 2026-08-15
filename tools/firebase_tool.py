"""
FirebaseInventoryTool — Custom CrewAI tool that queries
Firebase Realtime Database for live Northstar inventory data.
Database: https://the-northstar-group-project-default-rtdb.asia-southeast1.firebasedatabase.app
Credentials are loaded exclusively from environment variables.
"""

import os
import json
import re
from typing import Type

import firebase_admin
from firebase_admin import credentials, db
from crewai.tools import BaseTool
from pydantic import BaseModel, Field
