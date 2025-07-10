
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Apple, 
  TrendingUp, 
  Calendar, 
  Target, 
  Settings,
  LogOut,
  Activity,
  Clock,
  Flame
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-fitness-dark via-slate-900 to-fitness-dark">
      {/* Navigation */}
      <nav className="glass-card border-0 border-b border-fitness-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-fitness-red" />
              <span className="text-2xl font-poppins font-bold gradient-text">FitForge</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="glass-card p-6">
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'overview' ? 'bg-fitness-red text-white' : 'hover:bg-fitness-card'
                  }`}
                >
                  <TrendingUp className="inline h-4 w-4 mr-2" />
                  Overview
                </button>
                <Link to="/workout-viewer">
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-fitness-card transition-colors">
                    <Dumbbell className="inline h-4 w-4 mr-2" />
                    3D Workouts
                  </button>
                </Link>
                <button
                  onClick={() => setActiveTab('nutrition')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'nutrition' ? 'bg-fitness-teal text-white' : 'hover:bg-fitness-card'
                  }`}
                >
                  <Apple className="inline h-4 w-4 mr-2" />
                  Nutrition
                </button>
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'progress' ? 'bg-fitness-red text-white' : 'hover:bg-fitness-card'
                  }`}
                >
                  <Activity className="inline h-4 w-4 mr-2" />
                  Progress
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="glass-card p-8">
                  <h1 className="text-3xl font-poppins font-bold mb-2">Welcome back, Alex!</h1>
                  <p className="text-muted-foreground mb-6">Ready to crush your fitness goals today?</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-fitness-red to-red-600 p-6 rounded-xl text-white">
                      <Flame className="h-8 w-8 mb-4" />
                      <div className="text-2xl font-bold">450</div>
                      <div className="text-red-100">Calories Burned</div>
                    </div>
                    <div className="bg-gradient-to-r from-fitness-teal to-teal-600 p-6 rounded-xl text-white">
                      <Clock className="h-8 w-8 mb-4" />
                      <div className="text-2xl font-bold">45min</div>
                      <div className="text-teal-100">Workout Time</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                      <Target className="h-8 w-8 mb-4" />
                      <div className="text-2xl font-bold">75%</div>
                      <div className="text-purple-100">Goal Progress</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-card border-fitness-border">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Dumbbell className="h-5 w-5 mr-2 text-fitness-red" />
                        Today's Workout
                      </CardTitle>
                      <CardDescription>Upper Body Strength Training</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Progress</span>
                          <span>3/5 exercises</span>
                        </div>
                        <Progress value={60} className="h-2" />
                        <Link to="/workout-viewer">
                          <Button className="w-full btn-primary">Continue Workout</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-fitness-border">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Apple className="h-5 w-5 mr-2 text-fitness-teal" />
                        Nutrition Goal
                      </CardTitle>
                      <CardDescription>Daily calorie target</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Consumed</span>
                          <span>1,450 / 2,200 kcal</span>
                        </div>
                        <Progress value={66} className="h-2" />
                        <Button className="w-full btn-secondary">View Meal Plan</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-poppins font-bold mb-6">Nutrition Dashboard</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-green-500/20 border border-green-500/30 p-4 rounded-lg">
                      <div className="text-green-400 text-sm">Protein</div>
                      <div className="text-2xl font-bold">85g</div>
                      <div className="text-xs text-muted-foreground">Target: 120g</div>
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-lg">
                      <div className="text-blue-400 text-sm">Carbs</div>
                      <div className="text-2xl font-bold">180g</div>
                      <div className="text-xs text-muted-foreground">Target: 220g</div>
                    </div>
                    <div className="bg-yellow-500/20 border border-yellow-500/30 p-4 rounded-lg">
                      <div className="text-yellow-400 text-sm">Fats</div>
                      <div className="text-2xl font-bold">65g</div>
                      <div className="text-xs text-muted-foreground">Target: 75g</div>
                    </div>
                    <div className="bg-fitness-red/20 border border-fitness-red/30 p-4 rounded-lg">
                      <div className="text-fitness-red text-sm">Calories</div>
                      <div className="text-2xl font-bold">1,450</div>
                      <div className="text-xs text-muted-foreground">Target: 2,200</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Meal Planning</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="btn-primary">Generate Meal Plan</Button>
                      <Button variant="outline" className="border-fitness-border">Browse Recipes</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-poppins font-bold mb-6">Progress Tracking</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fitness-red mb-2">-5.2kg</div>
                      <div className="text-muted-foreground">Weight Lost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fitness-teal mb-2">+8%</div>
                      <div className="text-muted-foreground">Muscle Mass</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">42</div>
                      <div className="text-muted-foreground">Workouts Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
