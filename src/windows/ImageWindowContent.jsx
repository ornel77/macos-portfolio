import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"

const ImageWindowContent = () => {
  const {windows} = useWindowStore()
  const data = windows.imgfile?.data
  if (!data) return null;

  const {name, imageUrl} = data

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="preview">
        {imageUrl ? (
          <img src={imageUrl} alt="" />
        ): null}
      </div>
    </>
  )
}

const ImageWindowContentWindow = WindowWrapper(ImageWindowContent, "imgfile")
export default ImageWindowContentWindow