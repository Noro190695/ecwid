import {ChangeEvent, FormEvent, useRef, useState} from "react";
import { useAppDispatch } from "../../hooks/reduxHook";
import { addImages } from "../../radux/gallery/action";
import { disableLoading, enableLoading } from "../../radux/loading/action";
import style from "./upload.module.scss";

export const Upload = () => {
  const [inputType, setInputType] = useState("url");
  const [inputUrl, setInputUrl] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const changeInputType = (e: FormEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setInputType((e.currentTarget).value);
  };
  const changeInputUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  const uploadImage = () => {
    if (inputUrl) {
      const image = new Image();
      image.src = inputUrl;
      let [width, height] = [image.naturalWidth, image.naturalHeight];
      // if (width && height) {
        const data = [
          {
            url: image.src,
            width,
            height,
            big: width <= height || width > 430,
            id: Math.random() * 10000000
          },
        ];
        dispatch(addImages(data));
        dispatch(enableLoading());
        setTimeout(() => {
          dispatch(disableLoading());
        }, 2000);
      // }
      setInputUrl("");
    }
  };
  const uploadFiles = () => {
    const type = fileInput.current?.files![0]!.type.split("/")[1];
    if (type !== "json") {
      alert("file type should be json");
      return;
    }
    json(fileInput.current?.files![0]!);
    if (fileInput.current){
      fileInput.current.value = ''
    }
  };
  const json = (data: File) => {
    const fileReader = new FileReader();
    fileReader.readAsText(data, "UTF-8");
    fileReader.onload = (e) => {
      let data: any = e.target!.result;
      data = JSON.parse(data);
      if (data.length) {
        data = data.map((item: any) => {
          return {
            ...item,
            big: item.width > 430 || item.width <= item.height,
            id: Math.random() * 10000000
          };
        });
        dispatch(addImages(data));
        dispatch(enableLoading());
        setTimeout(() => {
          dispatch(disableLoading());
        }, 2000);
      }
    };
  };
  return (
    <form className={style.upload}>
      <div className={style.upload__block}>
        <select name="input_type" onChange={changeInputType} value={inputType}>
          <option value="url">URL</option>
          <option value="file">FILE</option>
        </select>
      </div>
      {inputType === "file" ? (
        <div  className={style.upload__block}>
          <input
            className={style.input}
            type="file"
            placeholder="Image url"
            ref={fileInput}
          />
          <button type="button" onClick={uploadFiles}>
            Загрузит
          </button>
        </div>
      ) : (
        <div className={style.upload__block}>
          <input
            className={style.input}
            type="url"
            placeholder="Image url"
            value={inputUrl}
            onChange={changeInputUrl}
          />
          <button type="button" onClick={uploadImage}>
            Загрузит
          </button>
        </div>
      )}
    </form>
  );
};
