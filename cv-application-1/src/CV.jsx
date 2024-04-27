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
        <div>{applicantInfo.name}</div>
        <div>{applicantInfo.email}</div>
        <div>{applicantInfo.phoneNumber}</div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div className="education-details">
          <div>{dateConverter(applicantInfo.dateOfStudy)} - present</div>
          <div>
            <div>{applicantInfo.schoolName}</div>
            <div>{applicantInfo.titleOfStudy}</div>
          </div>
        </div>
      </div>
      <div className="professional-experience">
        <h2>Professional Experience</h2>
        <div className="professional-experience-details">
          <div>
            {dateConverter(applicantInfo.workStartDate)} - {dateConverter(applicantInfo.workEndDate)}
          </div>
          <div>
            <div>{applicantInfo.companyName}</div>
            <div>{applicantInfo.positionTitle}</div>            
            <div>{applicantInfo.mainResponsibilites}</div>
          </div>
        </div>
      </div>
    </div>
  )
}