
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import { Dumbbell, RotateCcw, Play, Pause, ArrowLeft, Target, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import * as THREE from 'three';

// 3D Exercise Model Component
const ExerciseModel = ({ exercise, isPlaying }: { exercise: string; isPlaying: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && isPlaying) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group>
      {/* Main body representation */}
      <Box
        ref={meshRef}
        args={[1, 2, 0.5]}
        position={[0, 0, 0]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={hovered ? "#ef4444" : "#14b8a6"} 
          transparent 
          opacity={0.8} 
        />
      </Box>
      
      {/* Arms */}
      <Box args={[0.2, 1, 0.2]} position={[-0.8, 0.5, 0]}>
        <meshStandardMaterial color="#ef4444" transparent opacity={0.6} />
      </Box>
      <Box args={[0.2, 1, 0.2]} position={[0.8, 0.5, 0]}>
        <meshStandardMaterial color="#ef4444" transparent opacity={0.6} />
      </Box>
      
      {/* Legs */}
      <Box args={[0.3, 1.2, 0.3]} position={[-0.3, -1.5, 0]}>
        <meshStandardMaterial color="#14b8a6" transparent opacity={0.6} />
      </Box>
      <Box args={[0.3, 1.2, 0.3]} position={[0.3, -1.5, 0]}>
        <meshStandardMaterial color="#14b8a6" transparent opacity={0.6} />
      </Box>
      
      {/* Head */}
      <Sphere args={[0.3]} position={[0, 1.3, 0]}>
        <meshStandardMaterial color="#fbbf24" transparent opacity={0.7} />
      </Sphere>
      
      {/* Exercise name */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {exercise}
      </Text>
    </group>
  );
};

const WorkoutViewer = () => {
  const [currentExercise, setCurrentExercise] = useState('Push-ups');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState('chest');

  const exercises = [
    { name: 'Push-ups', muscles: ['chest', 'shoulders', 'triceps'], duration: '3 sets x 15 reps' },
    { name: 'Squats', muscles: ['quadriceps', 'glutes', 'calves'], duration: '3 sets x 20 reps' },
    { name: 'Pull-ups', muscles: ['lats', 'biceps', 'shoulders'], duration: '3 sets x 10 reps' },
    { name: 'Deadlifts', muscles: ['hamstrings', 'glutes', 'back'], duration: '3 sets x 12 reps' },
    { name: 'Planks', muscles: ['core', 'shoulders'], duration: '3 sets x 45s' }
  ];

  const muscleGroups = [
    { name: 'chest', color: '#ef4444', label: 'Chest' },
    { name: 'shoulders', color: '#f97316', label: 'Shoulders' },
    { name: 'triceps', color: '#eab308', label: 'Triceps' },
    { name: 'biceps', color: '#22c55e', label: 'Biceps' },
    { name: 'back', color: '#3b82f6', label: 'Back' },
    { name: 'core', color: '#8b5cf6', label: 'Core' },
    { name: 'quadriceps', color: '#ec4899', label: 'Quadriceps' },
    { name: 'hamstrings', color: '#14b8a6', label: 'Hamstrings' },
    { name: 'glutes', color: '#f59e0b', label: 'Glutes' },
    { name: 'calves', color: '#6366f1', label: 'Calves' }
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
                <Dumbbell className="h-6 w-6 text-fitness-red" />
                <span className="text-xl font-poppins font-bold gradient-text">3D Workout Viewer</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                className={isPlaying ? "btn-secondary" : "btn-primary"}
              >
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Viewer */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-fitness-border h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Interactive 3D Exercise Demo</span>
                  <Button variant="ghost" size="sm">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset View
                  </Button>
                </CardTitle>
                <CardDescription>
                  Click and drag to rotate • Scroll to zoom • Hover over muscles for details
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 h-[500px]">
                <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <pointLight position={[-10, -10, -5]} intensity={0.5} />
                  
                  <ExerciseModel exercise={currentExercise} isPlaying={isPlaying} />
                  
                  <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    minDistance={3}
                    maxDistance={15}
                  />
                </Canvas>
              </CardContent>
            </Card>
          </div>

          {/* Exercise Controls */}
          <div className="space-y-6">
            {/* Exercise List */}
            <Card className="glass-card border-fitness-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-fitness-red" />
                  Exercise Library
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {exercises.map((exercise) => (
                  <button
                    key={exercise.name}
                    onClick={() => setCurrentExercise(exercise.name)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      currentExercise === exercise.name
                        ? 'bg-fitness-red text-white'
                        : 'bg-fitness-card hover:bg-fitness-border'
                    }`}
                  >
                    <div className="font-medium">{exercise.name}</div>
                    <div className="text-sm opacity-75">{exercise.duration}</div>
                    <div className="text-xs mt-1">
                      {exercise.muscles.join(', ')}
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Muscle Groups */}
            <Card className="glass-card border-fitness-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-fitness-teal" />
                  Muscle Groups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {muscleGroups.map((muscle) => (
                    <button
                      key={muscle.name}
                      onClick={() => setSelectedMuscle(muscle.name)}
                      className={`flex items-center space-x-2 p-2 rounded-lg transition-all ${
                        selectedMuscle === muscle.name
                          ? 'bg-fitness-card border border-fitness-border'
                          : 'hover:bg-fitness-card/50'
                      }`}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: muscle.color }}
                      />
                      <span className="text-sm">{muscle.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exercise Info */}
            <Card className="glass-card border-fitness-border">
              <CardHeader>
                <CardTitle>Exercise Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Current Exercise</h4>
                  <p className="text-muted-foreground">{currentExercise}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Primary Muscles</h4>
                  <div className="flex flex-wrap gap-2">
                    {exercises
                      .find(ex => ex.name === currentExercise)
                      ?.muscles.map(muscle => (
                        <span
                          key={muscle}
                          className="px-2 py-1 bg-fitness-red/20 text-fitness-red text-xs rounded-full"
                        >
                          {muscle}
                        </span>
                      ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Instructions</h4>
                  <p className="text-sm text-muted-foreground">
                    Follow the 3D model demonstration. Focus on proper form and controlled movements. 
                    Watch muscle activation highlights to ensure correct engagement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutViewer;
