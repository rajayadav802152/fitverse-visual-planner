
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Dumbbell, 
  Apple, 
  BarChart3, 
  Settings,
  Plus,
  Edit,
  Trash2,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAddingWorkout, setIsAddingWorkout] = useState(false);

  const mockStats = {
    totalUsers: 12450,
    activeWorkouts: 8920,
    mealPlansCreated: 5680,
    totalRevenue: 89450
  };

  const mockWorkouts = [
    { id: 1, name: 'Upper Body Strength', exercises: 8, difficulty: 'Intermediate' },
    { id: 2, name: 'HIIT Cardio Blast', exercises: 12, difficulty: 'Advanced' },
    { id: 3, name: 'Beginner Full Body', exercises: 6, difficulty: 'Beginner' },
    { id: 4, name: 'Core Crusher', exercises: 10, difficulty: 'Intermediate' }
  ];

  const mockMealPlans = [
    { id: 1, name: 'Muscle Gain', calories: 2800, meals: 6 },
    { id: 2, name: 'Weight Loss', calories: 1800, meals: 4 },
    { id: 3, name: 'Maintenance', calories: 2200, meals: 5 },
    { id: 4, name: 'Keto Diet', calories: 2000, meals: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-fitness-dark via-slate-900 to-fitness-dark">
      {/* Navigation */}
      <nav className="glass-card border-0 border-b border-fitness-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Dashboard</span>
              </Link>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-fitness-red" />
                <span className="text-xl font-poppins font-bold gradient-text">Admin Panel</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                System Settings
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
                  <BarChart3 className="inline h-4 w-4 mr-2" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'users' ? 'bg-fitness-red text-white' : 'hover:bg-fitness-card'
                  }`}
                >
                  <Users className="inline h-4 w-4 mr-2" />
                  User Management
                </button>
                <button
                  onClick={() => setActiveTab('workouts')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'workouts' ? 'bg-fitness-red text-white' : 'hover:bg-fitness-card'
                  }`}
                >
                  <Dumbbell className="inline h-4 w-4 mr-2" />
                  Workout Library
                </button>
                <button
                  onClick={() => setActiveTab('nutrition')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'nutrition' ? 'bg-fitness-red text-white' : 'hover:bg-fitness-card'
                  }`}
                >
                  <Apple className="inline h-4 w-4 mr-2" />
                  Meal Plans
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h1 className="text-3xl font-poppins font-bold mb-6 gradient-text">Admin Dashboard</h1>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-r from-fitness-red to-red-600 p-6 rounded-xl text-white">
                      <Users className="h-8 w-8 mb-4" />
                      <div className="text-2xl font-bold">{mockStats.totalUsers.toLocaleString()}</div>
                      <div className="text-red-100">Total Users</div>
                    </div>
                    <div className="bg-gradient-to-r from-fitness-teal to-teal-600 p-6 rounded-xl text-white">
                      <Dumbbell className="h-8 w-8 mb-4" />
                      <div className="text-2xl font-bold">{mockStats.activeWorkouts.toLocaleString()}</div>
                      <div className="text-teal-100">Active Workouts</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                      <Apple className="h-8 w-8 mb-4" />
                      <div className="text-2xl font-bold">{mockStats.mealPlansCreated.toLocaleString()}</div>
                      <div className="text-purple-100">Meal Plans</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
                      <BarChart3 className="h-8 w-8 mb-4" />
                      <div className="text-2xl font-bold">${mockStats.totalRevenue.toLocaleString()}</div>
                      <div className="text-green-100">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'workouts' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-poppins font-bold">Workout Library Management</h2>
                    <Button 
                      onClick={() => setIsAddingWorkout(true)}
                      className="btn-primary"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Workout
                    </Button>
                  </div>

                  {isAddingWorkout ? (
                    <Card className="glass-card border-fitness-border mb-6">
                      <CardHeader>
                        <CardTitle>Add New Workout</CardTitle>
                        <CardDescription>Create a new workout template for users</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="workoutName">Workout Name</Label>
                            <Input id="workoutName" placeholder="Enter workout name" />
                          </div>
                          <div>
                            <Label htmlFor="difficulty">Difficulty Level</Label>
                            <select className="w-full p-2 bg-fitness-card border border-fitness-border rounded-lg">
                              <option>Beginner</option>
                              <option>Intermediate</option>
                              <option>Advanced</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea id="description" placeholder="Workout description..." />
                        </div>
                        <div className="flex space-x-4">
                          <Button className="btn-primary">Save Workout</Button>
                          <Button 
                            variant="outline" 
                            onClick={() => setIsAddingWorkout(false)}
                            className="border-fitness-border"
                          >
                            Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : null}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockWorkouts.map((workout) => (
                      <Card key={workout.id} className="glass-card border-fitness-border">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{workout.name}</CardTitle>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <CardDescription>
                            {workout.exercises} exercises • {workout.difficulty}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-poppins font-bold">Meal Plan Management</h2>
                    <Button className="btn-secondary">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Meal Plan
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockMealPlans.map((plan) => (
                      <Card key={plan.id} className="glass-card border-fitness-border">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{plan.name}</CardTitle>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <CardDescription>
                            {plan.calories} calories • {plan.meals} meals/day
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-poppins font-bold mb-6">User Management</h2>
                  <p className="text-muted-foreground">
                    User management functionality will be available once backend integration is complete.
                    This section will allow you to view, edit, and manage user accounts, subscriptions, and access levels.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
