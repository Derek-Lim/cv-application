export default function Educational() {
  return (
    <fieldset>
      <legend>Education Experience</legend>
      <label>
        <span>School Name:</span>
        <input type='text' id='school-name' />
      </label>
      <label>
        <span>Title of Study:</span>
        <select id="title-of-study">
          <option value="accounting">Accounting</option>
          <option value="computer-science">Computer Science</option>
          <option value="data-analytics">Data Analytics</option>
        </select>
      </label>
      <label>
        <span>Date of Study:</span>
        <input type='date' id='date-of-study' />
      </label>
    </fieldset>
  )
}