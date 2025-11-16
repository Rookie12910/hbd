# Birthday Wishing Website

A React.js birthday wishing website with interactive arrow animation that transforms a "sorry" message into a "happy birthday" celebration.

## Features

- **Interactive Opening Page**: Displays a "sorry" message with an emoji
- **Arrow Animation**: Clicking the button shoots an animated arrow towards the image
- **Image Transition**: Seamlessly transitions from "sorry" to "Happy Birthday" message
- **Smooth Animations**: CSS animations for arrow movement and fade effects
- **Responsive Design**: Works on desktop and mobile devices
- **Reset Functionality**: Option to reset and replay the animation

## How It Works

1. The page initially shows a "SORRY 😔" message
2. Click the "Click Here" button to trigger the animation
3. An arrow shoots upward towards the image with a smooth animation
4. After 1.5 seconds, the image transforms to show "HAPPY BIRTHDAY! 🎉🎂🎈"
5. A reset button appears to replay the animation

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173/`
3. Click the "Click Here" button to see the birthday animation!

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── App.jsx          # Main component with animation logic
├── App.css          # Styles and animations
├── main.jsx         # React DOM entry point
└── index.css        # Global styles
```

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Animations and styling
- **CSS Grid & Flexbox** - Layout and responsiveness

## Animation Details

- **Arrow Animation**: CSS keyframe animation with rotation and translation
- **Image Transition**: Fade-in effect with scaling
- **Interactive States**: Button disabled during animation to prevent conflicts
- **Smooth Timing**: 1.5-second arrow flight followed by instant image swap

## Customization

You can easily customize:
- **Images**: Replace placeholder divs with actual images in `App.jsx`
- **Animation Duration**: Modify the timeout in `App.jsx` and CSS animation duration
- **Colors**: Update the gradient colors in `App.css`
- **Arrow Style**: Change the arrow emoji or use an SVG icon

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.