import { useState } from 'react'
import './App.css'
import Form from './Form'
import CV from './CV'

const initialApplicantInfo = {
  name: 'Crazy Dave',
  email: 'CrazyDave@gmail.com',
  phoneNumber: '1234567890',
  schoolName: 'UC Davis',
  titleOfStudy: 'Botany',
  dateOfStudy: ' 2000-05-05',
  companyName: 'PopCap',
  positionTitle: 'Gardener',
  workStartDate: '2009-05-05',
  workEndDate: '2020-01-01',
  mainResponsibilites: 'plant plants, sell stuff'
}

function App() {
  const [applicantInfo, setApplicantInfo] = useState(initialApplicantInfo)
  const [buttonName, setButtonName] = useState('Submit')

  function updateApplicantInfo() {
    const newApplicantInfo = {
      ...applicantInfo,
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      phoneNumber: document.querySelector('#phone-number').value,
      schoolName: document.querySelector('#school-name').value,
      titleOfStudy: document.querySelector('#title-of-study').value,
      dateOfStudy: document.querySelector('#date-of-study').value,
      companyName: document.querySelector('#company-name').value,
      positionTitle: document.querySelector('#position-title').value,
      workStartDate: document.querySelector('#work-start-date').value,
      workEndDate: document.querySelector('#work-end-date').value,
      mainResponsibilites: document.querySelector('#main-responsibilites').value
    }
    setApplicantInfo(newApplicantInfo)
  }

  function toggleButton() {
    buttonName === 'Submit' ? setButtonName('Edit') : setButtonName('Submit')
  }

  function clearForm() {
    const form = document.querySelector('form')
    form.querySelectorAll('input').forEach(input => input.value = '')
    form.querySelector('select').value = 'accounting'
    form.querySelector('textarea').value = ''
  }

  function unclearForm() {
    const name = document.querySelector('#name')
    name.value = applicantInfo.name
    const email = document.querySelector('#email')
    email.value = applicantInfo.email
    const phoneNumber = document.querySelector('#phone-number')
    phoneNumber.value = applicantInfo.phoneNumber
    const schoolName = document.querySelector('#school-name')
    schoolName.value = applicantInfo.schoolName
    const titleOfStudy = document.querySelector('#title-of-study')
    titleOfStudy.value = applicantInfo.titleOfStudy
    const dateOfStudy = document.querySelector('#date-of-study')
    dateOfStudy.value = applicantInfo.dateOfStudy
    const companyName = document.querySelector('#company-name')
    companyName.value = applicantInfo.companyName
    const positionTitle = document.querySelector('#position-title')
    positionTitle.value = applicantInfo.positionTitle
    const workStartDate = document.querySelector('#work-start-date')
    workStartDate.value = applicantInfo.workStartDate
    const workEndDate = document.querySelector('#work-end-date')
    workEndDate.value = applicantInfo.workEndDate
    const mainResponsibilites = document.querySelector('#main-responsibilites')
    mainResponsibilites.value = applicantInfo.mainResponsibilites
  }

  function submit() {
    updateApplicantInfo()
    toggleButton()
    clearForm()
    if (buttonName === 'Edit') {
      unclearForm()
    }
  }

  return (
    <>
      <Form submit={submit} buttonName={buttonName} />
      <CV applicantInfo={applicantInfo} />
    </>
  )
}

export default App
