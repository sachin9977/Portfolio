const Loader = ({ className = '' }) => {
  return (
    <div className={ 'loader-wrapper ' + className }>
      <div className='loader'></div>
    </div>
  )
}

export default Loader
