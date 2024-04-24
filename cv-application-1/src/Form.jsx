import General from './GeneralInfo'
import Educational from './EducationalExp'
import Practical from './PracticalExp'

export default function Form() {
  function clearForm() {
    const form = document.querySelector('form')
    form.querySelectorAll('input').forEach(input => input.value = '')
    form.querySelector('select').value = 'accounting'
    form.querySelector('textarea').value = ''
  }
  return (
    <form>
      <General />
      <Educational />
      <Practical />
      <button type='button' onClick={clearForm}>Submit</button>
    </form>
  )
}
