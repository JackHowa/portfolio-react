import React, { Component } from 'react';
import Link from './Link';

class Footer extends Component {
  render() {
    return (
        <div>
          <tr>
            <td>
              <Link
                  linkTitle={'Twitter'} iconTitle={'fa fa-twitter'}
                  linkURL={'https://twitter.com/JackHowa'}/>
            </td>
            <td>

              <Link linkTitle={'GitHub'} iconTitle={'fa fa-github'}
                    linkURL={'https://github.com/jackhowa'}/>
            </td>
            <td>
              <Link linkTitle={'LinkedIn'} iconTitle={'fa fa-linkedin'}
                    linkURL={'https://www.linkedin.com/in/jackhowa/'}/>
            </td>
            <td>

              <Link linkTitle={'FreeCodeCamp'}
                    iconTitle={'fa fa-free-code-camp'}
                    linkURL={'https://www.freecodecamp.org/jackhowa'}/>
            </td>
          </tr>
        </div>
    );
  }
}

export default Footer;
