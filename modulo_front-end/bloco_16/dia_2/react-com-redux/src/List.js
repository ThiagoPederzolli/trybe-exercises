// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// class List extends React.Component {
//   render() {
//     const { list } = this.props;
//     return (
//       <div>
//         <div>
//           {list.map((element, index) => (
//             <p key={index}>{element}</p>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   list: state.listReducer,
// });

// List.propTypes = {
//   list: PropTypes.shape.isRequired,
// };

// export default connect(mapStateToProps)(List);

import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer,
});

export default connect(mapStateToProps)(List);
