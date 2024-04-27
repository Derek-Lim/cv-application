export default function Practical() {
  return (
    <fieldset>
      <legend>Practical Experience</legend>
      <label>
        <span>Company Name:</span>
        <input type='text' id='company-name' />
      </label>
      <label>
        <span>Position Title:</span>
        <input type='text' id='position-title' />
      </label>
      <label>
        <span>Work Start Date:</span>
        <input type='date' id='work-start-date' />
      </label>
      <label>
        <span>Work End Date:</span>
        <input type='date' id='work-end-date' />
      </label>
      <label>
        <span>Main Responsibilities:</span>
        <br />
        <textarea id='main-responsibilites' />
      </label>
    </fieldset>
  )
}