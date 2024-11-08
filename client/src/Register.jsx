export default function Register(){
  return(
    <div className="bg-blue-50 h-screen">register screen
      <form className="w-64 mx-auto">
        <input type="text" placeholder="username" className="block w-full"/>
        <input type="password" placeholder="password" className="block w-full"/>
        <button className="bg-blue-500 text-white block w-full rounded-md">Register</button>
      </form>
    </div>
  );
}