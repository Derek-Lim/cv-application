import General from './GeneralInfo'
import Educational from './EducationalExp'
import Practical from './PracticalExp'

export default function Form({ submit, buttonName }) {
  return (
    <form>
      <General />
      <Educational />
      <Practical />
      <button
        type='button'
        onClick={submit}
      >
        {buttonName}
      </button>
    </form>
  )
}
