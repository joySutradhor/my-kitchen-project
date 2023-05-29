
import { Helmet } from 'react-helmet-async';

const Title = ({headTitle}) => {
    return (
        <div>
            <Helmet>
                <title>{headTitle}</title>
            </Helmet>
        </div>
    );
};

export default Title;