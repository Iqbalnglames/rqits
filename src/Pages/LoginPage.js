const Login = () => {
  return (
    <div className="flex justify-center mt-40 mb-40">
      <div className="card w-96 bg-base-100 shadow-2xl shadow-black">
        <form>
          <div className="card-body">
            <h2 className="card-title mb-10">Login Here</h2>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-10">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
