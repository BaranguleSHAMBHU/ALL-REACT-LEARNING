const App = () => {

  const user = {
    id:1,
    name:'shambhu',
    age:18
  }
  localStorage.setItem('user',JSON.stringify(user))
  return (
    <div>
      App
    </div>
  )
}

export default App
