import './App.css';

function App() {
  return (
    <div className='container p-4'>

<TailwindCSSButton href={"https://youtu.be/KehujfbRBts?si=FMTQ9gN1YEThO8kS"}>
  Tailwindcss
</TailwindCSSButton>
    </div>
  
  
  );
}

function TailwindCSSButton (props){
  return (
    <a href={props.href} className='bg-blue-500 text-white font-medium px-4 py-4 rounded hover:bg-blue-600 inline-block'>{props.children}</a>
  )
}

export default App;
