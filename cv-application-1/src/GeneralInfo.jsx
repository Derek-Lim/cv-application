export default function General() {
  return (
    <fieldset>
      <legend>General Information</legend>
      <label>
        <span>Name:</span>
        <input type='text' id='name' />
      </label>
      <label>
        <span>Email:</span>
        <input type='email' id='email' />
      </label>
      <label>
        <span>Phone Number:</span>
        <input type='tel' id='phone-number' />
      </label>
    </fieldset>
  )
}