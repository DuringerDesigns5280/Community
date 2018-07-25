import React, { Component } from 'react';


class Resources extends Component {
  render() {
    return (
      <main>
          <div className='resMain'>
          <div className='resLogo'>LGBTQ RESOURCES</div>
          <div className='topRes'>
          <div>
              <h3>Trans</h3>
              <ul>
                  <li><a href='https://transequality.org/'>National Center For Transgender Equality</a></li>
                  <li><a href='https://srlp.org/'>Sylvia Rivera Law Project</a></li>
                  <li><a href='https://transgenderlawcenter.org/'>Transgender Law Center</a></li>
              </ul>
          </div>
          <div>
              <h3>Youth</h3>
              <ul>
                  <li><a href='https://www.glsen.org/'>Gay, Lesbian & Straight Education Network (GLSEN)</a></li>
                  <li><a href='https://www.accreditedschoolsonline.org/resources/lgbtq-student-support/'>LGBTQ Student Resources & Support</a></li>
                  <li><a href='https://pointfoundation.org/'>Point Foundation</a></li>
              </ul>
          </div>
          <div>
              <h3>Bi Sexual</h3>
              <ul>
                  <li><a href='http://www.binetusa.org/'>BiNetUSA</a></li>
                  <li><a href='http://biresource.org/'>BiNetUSA</a></li>
                  <li><a href='https://bisexual.org/'>BiSexual.org </a></li>
              </ul>
          </div>
          </div>
          <div className='bottomRes'>
          <div>
              <h3>Military</h3>
              <ul>
                  <li><a href='https://militarypartners.org/'>The American Military Partner Association (AMDA)</a></li>
                  <li><a href='http://aver.us/'>American Veterans for Equal Rights</a></li>
                  <li><a href='http://www.tavausa.org/'>Transgender American Veterans Association</a></li>
              </ul>
          </div>
          <div>
              <h3>LGBT Legal</h3>
              <ul>
                  <li><a href='https://www.aclu.org/issues/lgbt-rights?redirect=lgbt-rights'>The American Civil Liberties Union (ACLU)</a></li>
                  <li><a href='http://lgbtbar.org/'>The LGBT Bar</a></li>
                  <li><a href='http://www.nclrights.org/'>National Center for Lesbian Rights (NCLR)</a></li>
              </ul>
          </div>
          <div>
              <h3>Mental Health</h3>
              <ul>
                  <li><a href='https://www.aclu.org/issues/lgbt-rights?redirect=lgbt-rights'>The Trevor Project</a></li>
                  <li><a href='https://itunes.apple.com/us/app/verena/id1210502192?ls=1&mt=8'>Verena (app)</a></li>
                  <li><a href='https://www.talkspace.com/'>Talkspace</a></li>
              </ul>
          </div>
          </div>
          </div>
      </main>
    );
  }
}

export default Resources