# Fitness Tracker

A comprehensive fitness tracking application with MyFitnessPal-like functionality, featuring meal logging, nutrition analytics, and progress tracking.

## 🏗️ Architecture

**3-Tier Application Stack:**
- **Database:** PostgreSQL (port 5435)
- **Backend API:** FastAPI with Python 3.12 (port 9050)
- **Frontend:** React + TypeScript with Vite (ports 3000-3002)

## ✨ Features

- 📱 **Meal Entry System** - Add meals with detailed nutrition info through modal form
- 📊 **Analytics Dashboard** - Daily/weekly nutrition stats and trends
- 🎯 **Goal Tracking** - Set and monitor daily calorie/macro targets with progress bars
- 📈 **Charts & Visualizations** - Calories over time, macros breakdown
- 🍽️ **Meal History** - View and manage recent meal entries
- 📱 **Responsive Design** - Works on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Python 3.12+
- Node.js 18+
- PostgreSQL
- Git

### Initial Setup

1. **Clone and Setup Environment**
   ```bash
   git clone <repository-url>
   cd FitnessTracker
   
   # Create Python virtual environment
   python3 -m venv .venv
   source .venv/bin/activate  # On macOS/Linux
   
   # Install Python dependencies
   pip install -r requirements.txt
   ```

2. **Database Setup**
   ```bash
   # Start PostgreSQL (make sure it's running on port 5435)
   # Create database and run setup
   psql -h localhost -p 5435 -U postgres -d fitness_pipeline -f setup.sql
   psql -h localhost -p 5435 -U postgres -d fitness_pipeline -f main.sql
   ```

3. **Environment Configuration**
   ```bash
   # Copy and configure environment variables
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

## 🔧 Development Workflow

### Starting the Application

**⚠️ Important: Services must be started in this exact order:**

1. **Start PostgreSQL Database**
   ```bash
   # Ensure PostgreSQL is running on port 5435
   # Check with: lsof -i :5435
   ```

2. **Start FastAPI Backend**
   ```bash
   # From project root
   source .venv/bin/activate
   cd .vscode/backend
   uvicorn main:app --reload --host 0.0.0.0 --port 9050
   ```

3. **Start React Frontend**
   ```bash
   # In a new terminal, from project root
   cd frontend
   npm run dev
   ```

### Verification Commands

```bash
# Check if all services are running
lsof -i :5435  # PostgreSQL
lsof -i :9050  # FastAPI Backend  
lsof -i :3000  # React Frontend

# Test API endpoints
curl http://localhost:9050/api/summary
curl http://localhost:9050/api/meals
```

### Application URLs

- **Frontend Dashboard:** http://localhost:3000
- **Backend API:** http://localhost:9050
- **API Documentation:** http://localhost:9050/docs

## 🛑 Shutdown Procedures

### Clean Shutdown

1. **Stop React Frontend:** `Ctrl+C` in the frontend terminal
2. **Stop FastAPI Backend:** `Ctrl+C` in the backend terminal
3. **PostgreSQL:** Can remain running (or stop via system service)

### Force Stop Background Processes

If processes don't stop with Ctrl+C:

```bash
# Kill specific services by port
kill $(lsof -ti:9050)    # Stop FastAPI
kill $(lsof -ti:3000,3001,3002)  # Stop React dev servers

# Verify cleanup
lsof -i :9050 -i :3000 -i :3001 -i :3002
# Should return no results if successful
```

## 📁 Project Structure

```
FitnessTracker/
├── README.md                 # This file
├── .env                      # Environment variables
├── .env.example             # Environment template
├── main.sql                 # Database schema and views
├── setup.sql                # Database initialization
├── meals.csv                # Sample meal data
├── .venv/                   # Python virtual environment
├── .vscode/
│   └── backend/
│       └── main.py          # FastAPI application
└── frontend/                # React TypeScript app
    ├── src/
    │   ├── App.tsx          # Main app component
    │   ├── components/      # Reusable components
    │   ├── dashboard/       # Dashboard widgets
    │   └── api/            # API client
    ├── hooks/              # Custom React hooks
    └── pages/              # Page components
```

## 🔌 API Endpoints

- `GET /api/summary` - Dashboard summary stats
- `GET /api/calories` - Calories over time data
- `GET /api/macros` - Macronutrient breakdown
- `GET /api/daily-stats` - Daily nutrition totals
- `GET /api/meals` - Recent meal entries
- `POST /api/meals` - Create new meal entry
- `GET /api/goals` - User's daily nutrition goals

## 🛠️ Development Tips

**Adding New Meals:**
- Use the "Add Meal" button in the dashboard
- Modal form includes date/time pickers and nutrition inputs
- Data is immediately reflected in dashboard widgets

**Database Changes:**
- Modify `main.sql` for schema changes
- Restart backend after database updates

**Frontend Development:**
- Components are in `/frontend/src/components/`
- Dashboard widgets in `/frontend/src/dashboard/`
- API calls handled through `/frontend/src/api/client.ts`

**Troubleshooting:**
- Check all three services are running on correct ports
- Verify environment variables in `.env` file
- Check browser console and backend logs for errors
- Use `lsof -i :<port>` to verify process is listening

## 🐛 Common Issues

**"Connection refused" errors:**
- Ensure services started in correct order (DB → Backend → Frontend)
- Check if ports 5435, 9050, 3000 are available

**Backend import errors:**
- Activate virtual environment: `source .venv/bin/activate`
- Install dependencies: `pip install -r requirements.txt`

**Frontend build errors:**
- Delete `node_modules` and run `npm install`
- Check Node.js version (requires 18+)

## 📝 Contributing

1. Make changes in feature branches
2. Test all three services work together
3. Update this README if adding new features
4. Verify startup/shutdown procedures still work

## 📄 License

[Add your license information here]