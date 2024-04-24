export default function General() {
  return (
    <fieldset>
      <legend>General Information</legend>
      <label>
        <span>Name:</span>
        <input type='text' />
      </label>
      <label>
        <span>Email:</span>
        <input type='email' />
      </label>
      <label>
        <span>Phone Number:</span>
        <input type='tel' />
      </label>
    </fieldset>
  )
}