export default function Educational() {
  return (
    <fieldset>
      <legend>Education Experience</legend>
      <label>
        <span>School Name:</span>
        <input type='text' />
      </label>
      <label>
        <span>Title of Study:</span>
        <select>
          <option>Accounting</option>
          <option>Computer Science</option>
          <option>Data Analytics</option>
        </select>
      </label>
      <label>
        <span>Date of Study:</span>
        <input type='date' />
      </label>
    </fieldset>
  )
}