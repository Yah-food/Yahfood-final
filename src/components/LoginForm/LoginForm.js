export default function LoginForm({
  errorMessage,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <p>{errorMessage}</p>
        <div className="flex justify-center">
          <label className="flex justify-center flex-col mx-2 mt-48">
            <p>Email:</p>
            <input
              className=" border-solid rounded-lg border-2 w-40"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label className="flex justify-center flex-col mx-2 mt-48">
            <p>Password:</p>
            <input
              className=" border-solid rounded-lg border-2 w-40"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
        </div>
        <input
          className="border-black border-solid border-2 w-20 mx-auto mt-10 border-2 border-lime-700/50 rounded-lg bg-lime-700/50"
          type="submit"
        />
      </form>
    </div>
  );
}
