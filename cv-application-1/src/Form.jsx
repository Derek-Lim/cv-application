import General from './GeneralInfo'
import Educational from './EducationalExp'
import Practical from './PracticalExp'

export default function Form() {
  return (
    <form>
      <General />
      <Educational />
      <Practical />
    </form>
  )
}
