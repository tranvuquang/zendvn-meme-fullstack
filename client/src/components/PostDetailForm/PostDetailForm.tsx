import { useRef } from "react";
import image from "../../assets/images/no_image_available.jpg";
import { file2Base64 } from "../../ultis/file";

type Props = {
  url_image: string;
  post_content: string;
  onChangeDetailForm: (key: string, value: any) => void;
};
export default function PostDetailForm({
  post_content = "",
  onChangeDetailForm,
  url_image,
}: Props) {
  const handleOnChange = (key: string) => (e: any) => {
    const value = e.target.value;
    onChangeDetailForm(key, value);
  };

  const inputFileEl = useRef(null);
  const handleClickSelectFile = () => {
    const current = inputFileEl.current as any;
    current.click();
  };
  const handleChangeFile = async (e: any) => {
    const listFiles = e.target.files;
    if (listFiles.length === 0) return;
    const file = listFiles[0] as File;
    const base64 = await file2Base64(file);
    onChangeDetailForm("url_image", base64);
  };
  return (
    <div className="ass1-section ass1-section__edit-post">
      <div className="ass1-section__content">
        <form action="#">
          <div className="form-group">
            <textarea
              className="form-control ttg-border-none"
              placeholder="Mô tả ..."
              value={post_content}
              onChange={handleOnChange("post_content")}
            />
          </div>
        </form>
        <input
          ref={inputFileEl}
          style={{ display: "none" }}
          onChange={handleChangeFile}
          type="file"
        />
        <div className="ass1-section__image">
          <img src={url_image || image} alt="default" />
        </div>
        <button
          className="ass1-btn ass1-btn-meme"
          style={{ lineHeight: "20px" }}
          onClick={handleClickSelectFile}
        >
          Đăng ảnh từ máy tính
        </button>
      </div>
    </div>
  );
}
