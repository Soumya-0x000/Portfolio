export const TextReveal = ({child}) => {
  
    return (
        <>
            <div className="overflow-hidden ">
                {[...child].map((char, index) => (
                    <span
                    className="animate-text-reveal inline-block"
                    key={`${char}-${index}`}
                    style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'backwards' }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        </>
    );
};
  