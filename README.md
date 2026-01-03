# Luxury Estates - Premium Properties with 3D Tours

A modern real estate property viewer with immersive 3D virtual tours. Explore luxury properties with first-person controls, interactive room visualization, and a streamlined user experience.

## Features

- **Property Listings** - Browse a curated collection of premium properties with images and details
- **3D Virtual Tours** - Immersive first-person exploration of interior and exterior spaces
- **First-Person Controls** - WASD/Arrow keys for movement, mouse look with pointer lock
- **Responsive Design** - Mobile-friendly UI built with Tailwind CSS
- **Type-Safe** - Full TypeScript support throughout the application

## Tech Stack

### Core Framework
- **Next.js 16.1** - React framework with app router and server-side capabilities
- **React 19** - UI library with hooks and functional components
- **TypeScript 5** - Type-safe JavaScript development

### 3D Graphics & Visualization
- **Three.js 0.182** - 3D graphics library for WebGL rendering
- **@react-three/fiber 9.5** - React renderer for Three.js with hooks integration
- **@react-three/drei 10.7** - Useful abstractions and helpers for React Three Fiber
  - Includes `PointerLockControls` for mouse-locked first-person camera control
  - Geometry and material utilities

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework for responsive design
- **Lucide React 0.562** - Lightweight icon library for UI elements

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main listing view
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── components/
│   ├── 3d-viewer/        # 3D visualization components
│   │   ├── Viewer3D.tsx       # Canvas wrapper and 3D view controller
│   │   ├── FirstPersonControls.tsx  # First-person movement and controls
│   │   └── Room.tsx            # 3D scene with room geometry
│   └── property/         # Property listing components
│       ├── PropertyCard.tsx    # Individual property card
│       └── PropertyDetail.tsx  # Detailed property view with 3D launch
├── lib/
│   ├── types.ts          # TypeScript type definitions
│   └── sample-data.ts    # Mock property data
├── hooks/                # Custom React hooks (if any)
└── public/               # Static assets
```

## Application Flow

### Component Architecture

The application follows a hierarchical, responsibility-driven architecture:

1. **Homepage (`page.tsx`)** - Lightweight listing view
   - Renders property grid via `PropertyCard` components
   - Manages selection state and navigation
   - Only handles list → detail transitions

2. **Property Detail (`PropertyDetail.tsx`)** - Detailed property information
   - Owns the 3D viewer experience completely
   - Manages image gallery and property information
   - Internally handles detail → 3D viewer transitions
   - No concerns passed up to parent

3. **3D Viewer (`Viewer3D.tsx`)** - Canvas and scene management
   - Wrapper for the Three.js Canvas element
   - Handles WebGL context lifecycle (graceful context loss handling)
   - Exit button and pointer lock cleanup
   - Manages Canvas destruction and resource disposal

4. **First-Person Controls (`FirstPersonControls.tsx`)** - User interaction
   - Keyboard input handling (WASD/Arrow keys + Space)
   - Mouse-locked camera control via `PointerLockControls`
   - Frame-by-frame movement updates using `useFrame`
   - WebGL context loss detection and graceful degradation

5. **Room (`Room.tsx`)** - 3D Scene content
   - Floor, walls, windows, and lighting setup
   - Interior furniture or exterior elements based on room type
   - Three.js mesh creation and material configuration

## Key Implementation Details

### 3D Viewer Architecture

**Why the 3D viewer is colocated with PropertyDetail:**
- The 3D experience is only accessed from property details
- Keeps the homepage lightweight and focused on listing
- Better separation of concerns and component responsibility
- Each component owns its entire subtree

### First-Person Movement

Uses `useFrame` hook from React Three Fiber for smooth animation:
```typescript
useFrame((state, delta) => {
    // Movement calculations run once per frame
    // Camera position updates synchronized with rendering
})
```

### Pointer Lock & Controls

Implements the **Pointer Lock API** for seamless mouse look:
- Mouse movements are captured without a visible cursor
- Relative mouse movement for continuous camera rotation
- Graceful exit with `document.exitPointerLock()`
- Proper cleanup when unmounting to prevent DOM access errors

### WebGL Context Management

Handles THREE.js WebGL context lifecycle:
1. **Context Loss Handling** - Listens for `webglcontextlost` events
2. **Graceful Disposal** - Uses `WEBGL_lose_context` extension for clean shutdown
3. **Resource Cleanup** - Prevents errors when destroying canvas DOM elements
4. **Frame Safeguards** - `useFrame` operations check for context validity

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Building for Production

```bash
npm run build
npm start
```

## Usage Guide

### Browsing Properties
1. Navigate to the homepage to see all available luxury properties
2. Click any property card to view detailed information
3. See property features, images, and descriptions

### Experiencing 3D Tours
1. From property details, click "View Interior in 3D" or "View Exterior in 3D"
2. **Click the canvas** to activate pointer lock and begin exploration
3. **Movement Controls:**
   - `W` / `↑` - Move forward
   - `S` / `↓` - Move backward
   - `A` / `←` - Strafe left
   - `D` / `→` - Strafe right
   - **Mouse** - Look around (when pointer is locked)
4. **Exit Controls:**
   - Click the **X button** in the top-right to exit 3D view
   - Press **ESC** to unlock pointer (exits automatically)

## Type System

### Core Types (`lib/types.ts`)

```typescript
type RoomType = "interior" | "exterior"

interface Property {
    id: number
    title: string
    price: string
    location: string
    beds: number
    baths: number
    sqft: string
    description: string
    images: string[]
    features: string[]
}

interface PropertyCardProps {
    property: Property
    onClick: () => void
}

interface PropertyDetailProps {
    property: Property
    onBack: () => void
}

interface Viewer3DProps {
    type: RoomType
    onExit: () => void
}
```

## Performance Considerations

- **Colocated Code** - Components load only what they need, reducing bundle size
- **Lazy 3D Rendering** - 3D viewer only mounts when explicitly accessed
- **Frame Rate Control** - `useFrame` synchronizes animations with display refresh rate
- **Canvas Disposal** - Proper WebGL cleanup prevents memory leaks

## Browser Compatibility

- **Desktop Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Pointer Lock API** - Required for 3D controls
- **WebGL 2.0** - Recommended for better performance
- **Mobile** - Limited support (pointer lock not available on touch devices)

## Future Enhancements

- [ ] Property filtering and search
- [ ] Advanced lighting and materials
- [ ] Furniture interaction and placement
- [ ] Multiplayer viewing sessions
- [ ] VR/headset support with WebXR
- [ ] Performance optimizations for large scenes
- [ ] Save favorites and comparison tools

## Troubleshooting

### WebGL Context Lost Error
- Ensure proper cleanup when closing the 3D viewer
- Check browser WebGL extensions are enabled
- Try clearing browser cache and reloading

### Controls Not Responding
- Ensure you've clicked the canvas to activate pointer lock
- Check for browser console errors
- Verify keyboard input isn't blocked by other applications

## License

MIT
