export const TemplateNews = () => {
  const contents = [1, 2, 3, 4, 5, 6];
  return (
    <div className="my-20 mx-auto container">
      <div className="text-white text-2xl lg:text-4xl font-bold capitalize flex justify-center items-center">
        All the features you want to know
      </div>
      <div className="text-white text-sm sm:text-base flex items-center justify-center mt-2">
        Category
      </div>
      <div className="text-white text-sm font-normal flex justify-center items-center mt-2">
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        velit..." "There is no one who loves pain itself, who seeks after it and wants to have it,
        simply because it is pain..."
      </div>

      <div className="w-1/2 h-[120px] md:h-[360px] mx-auto my-8">
        <img
          className="object-cover w-full rounded-xl h-full"
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>

      <div>
        {contents.map((value) => (
          <div className="text-white text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id imperdiet felis.
            Integer id euismod felis. Nullam ultricies arcu sit amet quam sollicitudin facilisis.
            Proin scelerisque scelerisque sem non euismod. Proin a erat nec elit luctus eleifend.
            Cras non lectus sit amet leo scelerisque sollicitudin. Nam in posuere quam. Proin nec
            eros turpis. Ut sollicitudin eros lectus, non vulputate urna interdum et. Duis commodo
            sodales condimentum. Cras ante felis, condimentum ut finibus eget, convallis vitae ante.
            Sed elementum lacus a dui mattis imperdiet. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Aenean lobortis felis laoreet, maximus
            justo sit amet, ornare erat. Vestibulum eget nibh sagittis, iaculis risus id, vehicula
            tellus.
          </div>
        ))}
        <div className="text-white text-sm sm:text-base flex flex-cols items-center mt-4 space-x-2">
          <span>By </span> <span className="font-bold">Amelia. Anderson</span>, in{' '}
          <div className="font-bold">28-11-2022</div>
        </div>
      </div>
    </div>
  );
};
