export interface UploadImageListProp {
  images: string[];
  styleProps?: string;
  onImages?: (images: string[]) => void;
}

export const ImageCard = (props: { image: string }) => {
  return (
    <div className="h-[160px] p-2 flex items-center content-between gap-y-2">
      <img src={props.image} alt={props.image} className="w-full h-full object-fill rounded" />
    </div>
  );
};

export const UploadCard = (props: {
  onChange: (file: FileList | null) => void;
  multiple?: boolean;
}) => {
  return (
    <label htmlFor="file-upload" className="w-[80%] h-[80%] space-y-1 text-center cursor-pointer">
      <input
        id="file-upload"
        name="file-upload"
        type="file"
        className="sr-only"
        accept="image/png, image/jpeg"
        onChange={(event) => {
          props.onChange(event.target.files);
        }}
        multiple
      />
      <svg
        className="mx-auto h-[60%] w-[60%] text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex text-sm text-gray-600 items-center justify-center w-full">
        <span className="relative rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none hover:text-indigo-500 w-fit h-fit">
          <span>Upload a file</span>
        </span>
        <span className="pl-1 h-fit">or drag and drop</span>
      </div>
      <span className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</span>
    </label>
  );
};

export const UploadListImageComponent: React.FC<UploadImageListProp> = (
  props: UploadImageListProp,
) => {
  return (
    <form>
      <div className={`${props.styleProps}`}>
        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
          <div className="text-center flex justify-center items-center">
            <div
              className={`${
                props.images.length === 0
                  ? 'flex items-center justify-center'
                  : 'grid lg:grid-cols-5 md:grid-cols-3 gap-1'
              } `}
              onClick={() => {
                props.onImages!([]);
              }}
            >
              {props.images.length === 0 ? (
                <UploadCard
                  onChange={(files) => {
                    if (files) {
                      let strFiles: string[] = [];
                      for (let i = 0; i < files.length; i++) {
                        if (files[i]) {
                          let strImg: string = URL.createObjectURL(files[i]);
                          strFiles.push(strImg);
                        }
                      }
                      props.onImages!(strFiles);
                    }
                  }}
                />
              ) : (
                props.images.map((item) => {
                  return <ImageCard image={item} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
