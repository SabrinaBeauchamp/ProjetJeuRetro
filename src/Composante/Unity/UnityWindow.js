import { Unity, useUnityContext } from "react-unity-webgl";

const UnityWindow = ({url}) =>{
    const { unityProvider } = useUnityContext(
        url != null ?{
            loaderUrl:url.loaderUrl,
            dataUrl:url.dataUrl,
            frameworkUrl:url.frameworkUrl,
            codeUrl:url.codeUrl,
        }
        :{})

    return (
        <Unity unityProvider={unityProvider} style={{ width: 960, height: 600 }} />
      );
}
export default(UnityWindow);