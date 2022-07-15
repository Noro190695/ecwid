import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";
import style from "./gallery.module.scss";
import {removeImage} from "../../radux/gallery/action";

export const Gallery = () => {
  const images = useAppSelector((state) => state.gallery);
  const dispatch = useAppDispatch();
  const remove = (id: number) => {
    if (id)  dispatch(removeImage(id));

  }
  return (
    <div className={style.gallery}>
      {images.length
        ? images.map((img, i) => {
            return (
              <div className={`${style.gallery__item} ${img.big? style.big:''}`} key={i.toString()}>
                <button className={style.remove} onClick={() => remove(img.id)}>&#10006;</button>
                <img
                  src={img.url}
                  alt=""
                />
              </div>
            );
          })
        : null}
    </div>
  );
};
