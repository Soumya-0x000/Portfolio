export const TextReveal = ({child}) => {
    return (
        <>
            <div className="overflow-hidden pb-1 lg:pb-2 z-">
                {[...child].map((char, index) => (
                    <span
                    className="animate-text-reveal inline-block"
                    key={`${char}-${index}`}
                    style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'backwards' }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        </>
    );
};
  