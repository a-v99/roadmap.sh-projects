import React, { useState } from 'react';

const flashcards = [
  {
    theme: "Front End",
    question: "What is front-end development?",
    answer: "Front-end development focuses on building the user interface and user experience of a website or web application using technologies like HTML, CSS, and JavaScript."
  },
  {
    theme: "Front End",
    question: "What is the role of HTML in front-end development?",
    answer: "HTML provides the structure and content of a web page, defining elements like headings, paragraphs, images, and links."
  },
  {
    theme: "Front End",
    question: "What is CSS used for?",
    answer: "CSS is used to style and layout web pages, controlling colors, fonts, spacing, and responsiveness."
  },
  {
    theme: "Front End",
    question: "What does responsive design mean?",
    answer: "Responsive design ensures that a website adapts its layout and appearance to different screen sizes and devices."
  },
  {
    theme: "JavaScript",
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used to add interactivity, logic, and dynamic behavior to web pages."
  },
  {
    theme: "JavaScript",
    question: "What is a variable in JavaScript?",
    answer: "A variable is a container used to store data values, declared using var, let, or const."
  },
  {
    theme: "JavaScript",
    question: "What is the difference between let and const?",
    answer: "let allows reassignment of a variable, while const does not allow reassignment after it is defined."
  },
  {
    theme: "JavaScript",
    question: "What is a function?",
    answer: "A function is a reusable block of code designed to perform a specific task."
  },
  {
    theme: "JavaScript",
    question: "What is an array?",
    answer: "An array is a data structure used to store multiple values in a single variable."
  },
  {
    theme: "JavaScript",
    question: "What is an object in JavaScript?",
    answer: "An object is a collection of key-value pairs used to represent structured data."
  },
  {
    theme: "JavaScript",
    question: "What is the DOM?",
    answer: "The DOM (Document Object Model) is a representation of the HTML structure that JavaScript can interact with and manipulate."
  },
  {
    theme: "React",
    question: "What is React?",
    answer: "React is a JavaScript library used for building user interfaces using reusable components."
  },
  {
    theme: "React",
    question: "What is a component in React?",
    answer: "A component is a reusable piece of UI that can contain its own logic and rendering."
  },
  {
    theme: "React",
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript."
  },
  {
    theme: "React",
    question: "What are props in React?",
    answer: "Props are inputs passed from a parent component to a child component to share data."
  },
  {
    theme: "React",
    question: "What is state in React?",
    answer: "State is an object that holds data that can change over time and affects how a component renders."
  },
  {
    theme: "React",
    question: "What is useState?",
    answer: "useState is a React Hook that allows functional components to manage state."
  },
  {
    theme: "React",
    question: "What is useEffect used for?",
    answer: "useEffect is a React Hook used to handle side effects like data fetching or DOM updates."
  },
  {
    theme: "React",
    question: "What is conditional rendering in React?",
    answer: "Conditional rendering means displaying different UI elements based on certain conditions."
  },
  {
    theme: "React",
    question: "Why are keys important in React lists?",
    answer: "Keys help React identify which items have changed, been added, or removed, improving performance."
  }
];

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    padding: '2rem 1rem',
  },
  wrapper: {
    maxWidth: '42rem',
    margin: '0 auto',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1.5rem',
  },
  progressContainer: {
    marginBottom: '1.5rem',
  },
  progressHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
  },
  progressPercentage: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
  },
  progressCount: {
    fontSize: '0.875rem',
    color: '#4b5563',
  },
  progressBarOuter: {
    width: '100%',
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    height: '0.75rem',
    overflow: 'hidden',
  },
  progressBarInner: {
    backgroundColor: '#6b7280',
    height: '100%',
    borderRadius: '9999px',
    transition: 'width 0.3s ease-out',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    border: '1px solid #e5e7eb',
    padding: '2rem',
    marginBottom: '1.5rem',
  },
  themeBadge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#1d4ed8',
    backgroundColor: '#dbeafe',
    borderRadius: '9999px',
    marginBottom: '1rem',
  },
  cardContent: {
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardText: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    lineHeight: '1.75',
    padding: '0 1rem',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  toggleButton: {
    padding: '0.5rem 1.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  navButtonEnabled: {
    color: '#374151',
  },
  navButtonDisabled: {
    color: '#d1d5db',
    cursor: 'not-allowed',
  },
};

function Card({ theme, question, answer, isFlipped, onToggle }) {
  return (
    <div style={styles.card}>
      <div>
        <span style={styles.themeBadge}>{theme}</span>
      </div>
      
      <div style={styles.cardContent}>
        <p style={styles.cardText}>
          {isFlipped ? answer : question}
        </p>
      </div>
      
      <div style={styles.buttonContainer}>
        <button
          onClick={onToggle}
          style={{
            ...styles.toggleButton,
            ':hover': { color: '#111827' }
          }}
          onMouseEnter={(e) => e.target.style.color = '#111827'}
          onMouseLeave={(e) => e.target.style.color = '#374151'}
        >
          {isFlipped ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>
    </div>
  );
}

function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div style={styles.progressContainer}>
      <div style={styles.progressHeader}>
        <span style={styles.progressPercentage}>{percentage}%</span>
        <span style={styles.progressCount}>{current} of {total}</span>
      </div>
      <div style={styles.progressBarOuter}>
        <div 
          style={{
            ...styles.progressBarInner,
            width: `${percentage}%`
          }}
        />
      </div>
    </div>
  );
}

function Navigation({ onPrevious, onNext, hasPrevious, hasNext }) {
  return (
    <div style={styles.navigation}>
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        style={{
          ...styles.navButton,
          ...(hasPrevious ? styles.navButtonEnabled : styles.navButtonDisabled)
        }}
        onMouseEnter={(e) => hasPrevious && (e.target.style.color = '#111827')}
        onMouseLeave={(e) => hasPrevious && (e.target.style.color = '#374151')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Previous
      </button>
      
      <button
        onClick={onNext}
        disabled={!hasNext}
        style={{
          ...styles.navButton,
          ...(hasNext ? styles.navButtonEnabled : styles.navButtonDisabled)
        }}
        onMouseEnter={(e) => hasNext && (e.target.style.color = '#111827')}
        onMouseLeave={(e) => hasNext && (e.target.style.color = '#374151')}
      >
        Next
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };
  
  const toggleFlip = () => {
    setIsFlipped(prev => !prev);
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Flash Cards</h1>
        
        <ProgressBar 
          current={currentIndex + 1} 
          total={flashcards.length} 
        />
        
        <Card
          theme={flashcards[currentIndex].theme}
          question={flashcards[currentIndex].question}
          answer={flashcards[currentIndex].answer}
          isFlipped={isFlipped}
          onToggle={toggleFlip}
        />
        
        <Navigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={currentIndex > 0}
          hasNext={currentIndex < flashcards.length - 1}
        />
      </div>
    </div>
  );
}