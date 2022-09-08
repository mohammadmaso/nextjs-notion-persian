import { Global } from '@emotion/react'
import { ReactElement } from 'react'

type Props = {
  children: ReactElement<any, any>
}

const Fonts = ({ children }: Props) => (
  <>
    <Global
      styles={`
			@font-face {
  font-family: Sahel;
  src: url('/fonts/sahel/Sahel.eot');
  src: url('/fonts/sahel/Sahel.eot?#iefix') format('embedded-opentype'),
       url('/fonts/sahel/Sahel.woff2') format('woff2'),
       url('/fonts/sahel/Sahel.woff') format('woff'),
       url('/fonts/sahel/Sahel.ttf') format('truetype');
  font-weight: normal;
}
      
@font-face {
  font-family: Sahel;
  src: url('/fonts/sahel/Sahel-Bold.eot');
  src: url('/fonts/sahel/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
       url('/fonts/sahel/Sahel-Bold.woff2') format('woff2'),
       url('/fonts/sahel/Sahel-Bold.woff') format('woff'),
       url('/fonts/sahel/Sahel-Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: Sahel;
  src: url('/fonts/sahel/Sahel-Light.eot');
  src: url('/fonts/sahel/Sahel-Light.eot?#iefix') format('embedded-opentype'),
       url('/fonts/sahel/Sahel-Light.woff2') format('woff2'),  
       url('/fonts/sahel/Sahel-Light.woff') format('woff'),
       url('/fonts/sahel/Sahel-Light.ttf') format('truetype');
  font-weight: 300;
}
      
@font-face {
  font-family: Sahel;
  src: url('/fonts/sahel/Sahel-SemiBold.eot');
  src: url('/fonts/sahel/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
       url('/fonts/sahel/Sahel-SemiBold.woff2') format('woff2'),  
       url('/fonts/sahel/Sahel-SemiBold.woff') format('woff'),
       url('/fonts/sahel/Sahel-SemiBold.ttf') format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: Sahel;
  src: url('/fonts/sahel/Sahel-Black.eot');
  src: url('/fonts/sahel/Sahel-Black.eot?#iefix') format('embedded-opentype'),
       url('/fonts/sahel/Sahel-Black.woff2') format('woff2'),  
       url('/fonts/sahel/Sahel-Black.woff') format('woff'),
       url('/fonts/sahel/Sahel-Black.ttf') format('truetype');
  font-weight: 900;
}
	`}
    />
    {children}
  </>
)

export default Fonts
