export default function CV({ applicantInfo }) {
  function dateConverter(date) {
    const arr = date.split('-')
    arr[0] = arr[0].replace(/\s+/g,'')
    return (
      `${arr[1]}/${arr[0]}`
    )
  }

  return (
    <div className='cv'>
      <div className="general-info">
        <div className="name"><b>{applicantInfo.name}</b></div>
        <div className="email">{applicantInfo.email}</div>
        <div className="phone-number">{applicantInfo.phoneNumber}</div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div className="education-details">
          <div className="date-of-study">{dateConverter(applicantInfo.dateOfStudy)} - present</div>
          <div>
            <div className="school-name"><b>{applicantInfo.schoolName}</b></div>
            <div className="title-of-study">{applicantInfo.titleOfStudy}</div>
          </div>
        </div>
      </div>
      <div className="professional-experience">
        <h2>Professional Experience</h2>
        <div className="professional-experience-details">
          <div className="work-start-end-date">
            {dateConverter(applicantInfo.workStartDate)} - {dateConverter(applicantInfo.workEndDate)}
          </div>
          <div>
            <div className="company-name"><b>{applicantInfo.companyName}</b></div>
            <div className="position-title"><i>{applicantInfo.positionTitle}</i></div>            
            <div className="main-responsibilities">{applicantInfo.mainResponsibilites}</div>
          </div>
        </div>
      </div>
    </div>
  )
}