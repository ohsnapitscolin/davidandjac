const Title = ({ lines }) => {
  return lines.map((line, i) => {
    if (!line.length) {
      return <br key={i} />;
    }

    return (
      <span key={i}>
        {line.map((l, j) => {
          const { value, style, link } = l;

          return (
            <span
              key={`${i}_${j}`}
              className={`text-xl lg:text-[22px] uppercase font-brunswick ${style === "alpina" && "!font-alpina-italic italic lowercase"}`}
            >
              {link ? (
                <a
                  href={link}
                  target={link.startsWith("http") ? "__blank" : undefined}
                  className="underline underline-offset-4"
                >
                  {value}
                </a>
              ) : (
                value
              )}
            </span>
          );
        })}
      </span>
    );
  });
};

export default Title;
