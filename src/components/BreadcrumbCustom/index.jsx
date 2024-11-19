import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
const Component = ({ breadcrumbs  }) => {
    return (
        <>
            <div className="page-title light-background">
                <Container>
                    <h1>{breadcrumbs[breadcrumbs.length - 1]?.label}</h1>
                    <Breadcrumb className="breadcrumbs">
                       {breadcrumbs.map((crumb, index) => (
                        <Breadcrumb.Item
                            key={index}
                            linkAs={crumb.path ? Link : undefined}
                            linkProps={crumb.path ? {to: crumb.path}: undefined}
                            active={!crumb.path}
                        >
                            {crumb.label}
                        </Breadcrumb.Item>
                       ))}
                    </Breadcrumb>
                </Container>
            </div>
        </>
    )
}
Component.propTypes = {
    breadcrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            path: PropTypes.string
        })
    )
}
export default Component