import Image from 'next/image';
import styles from './styles.module.scss';

import GitHubIcon from '../../assests/github_icon.svg';
import InstagramIcon from '../../assests/instagram.svg';
import CodeSandboxIcon from '../../assests/codesandbox.svg';
import LinkedIn from '../../assests/linkedIn.svg';

function LeftSideBar() {

  return (
    <div className={styles.container}>
      <ul>
      {
        [GitHubIcon,InstagramIcon,CodeSandboxIcon,LinkedIn].map((icon,index)=>{
          return(<li key={index}>
            <Image src={icon} alt="icon" width={200} height={200} style={{ color: 'hotpink' }}/>
          </li>)
        })
      }
      </ul>
    </div>
  )

}

export default LeftSideBar