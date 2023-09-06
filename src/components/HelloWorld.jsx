import {
  ChevronUp,
  RotateCcw,
  ChevronDown,
  ChevronsUp,
  ChevronsDown,
  Hash,
} from 'react-feather';

function HelloWorld({
  count,
  IncrementBy1,
  IncrementBy10,
  ResetCount,
  RandomCount,
  DecrementBy10,
  DecrementBy1,
}) {
  return (
    <>
      <div className="container">
        <h6>Current value:</h6>
        <h1>{count}</h1>
        <button onClick={IncrementBy1}>
          <ChevronUp />
        </button>
        <button onClick={IncrementBy10}>
          <ChevronsUp />
        </button>
        <button onClick={ResetCount}>
          <RotateCcw />
        </button>
        <button onClick={RandomCount}>
          <Hash />
        </button>
        <button onClick={DecrementBy10}>
          <ChevronsDown />
        </button>
        <button onClick={DecrementBy1}>
          <ChevronDown />
        </button>
      </div>
    </>
  );
}

export default HelloWorld;
