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
      <form onSubmit={handleSubmit}>
        <p>{errorMessage}</p>
        <label>
          Email:
          <input
            className="border-black border-solid border-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          Password:
          <input
            className="border-black border-solid border-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <input className="border-black border-solid border-2" type="submit" />
      </form>
    </div>
  );
}
