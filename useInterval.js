import React, { useEffect, useCallback, useState, useContext, useRef } from 'react';

import { DbController, BasiqController } from 'controllers';

import { UserContext } from 'context';

const useInterval = (callback, delay) => {
	// const { userContext } = useContext(UserContext);

	const savedCallback = useRef();

	// Remember the latest callback
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			const id = setInterval(tick, delay);
			return () => {
				clearInterval(id);
			}
		}
	}, [callback, delay]);
};

export default useInterval;
