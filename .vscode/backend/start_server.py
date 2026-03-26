#!/usr/bin/env python3
import os
import sys

# Change to the backend directory
backend_dir = '/Users/brendanduffy/Documents/FitnessTracker/.vscode/backend'
os.chdir(backend_dir)

# Add the backend directory to Python path
sys.path.insert(0, backend_dir)

# Now import and run uvicorn
import uvicorn

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=9000, reload=True)