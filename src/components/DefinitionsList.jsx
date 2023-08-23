import React from 'react';

class DefinitionsList extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <dl>
        {data.map(item => {
          return (
            <React.Fragment key={item.id}>
              <dt> {item.dt}</dt>
              <dt>{item.dd}</dt>
            </React.Fragment>
          );
        })}
      </dl>
    );
  }
}

DefinitionsList.defaultProps = {
  data: null,
};

export default DefinitionsList;