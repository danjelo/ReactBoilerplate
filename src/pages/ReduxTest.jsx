import { connect } from 'react-redux'

//component
import { SearchGitRepos } from '../components/SearchGitRepos'

//actions
import { onFieldChange, reset } from '../redux/stores/gitHub'
import { getRepos } from '../redux/stores/gitHubThunk'

//selectors
import { selectRepos, selectIsLoading, selectError, selectFieldValue } from '../redux/stores/gitHub'


const mapStateToProps = state => ({
  repos: selectRepos(state),
  isFetching: selectIsLoading(state),
  error: selectError(state),
  fieldValue: selectFieldValue(state)
})

const mapDispatchToProps = { onFieldChange, getRepos, reset }

export default connect(mapStateToProps, mapDispatchToProps)(SearchGitRepos);

