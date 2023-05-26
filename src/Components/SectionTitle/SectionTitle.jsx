

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="mx-auto text-center py-5 md:w-4/12">
            <p className="text-yellow-600">---{heading}---</p>
            <p className="text-3xl py-2 uppercase border-y-2">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;