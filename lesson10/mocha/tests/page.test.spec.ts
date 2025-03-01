import { testPage } from '../src/utils/test-page';
import { Page } from '../src/pages/page';
import { strict as assert } from 'assert';
import sinon from 'sinon';

describe('testPage function', () => {
    it('should call open and getTitle', () => {
        const mockPage = {
            open: () => 'Mock Opened',
            getTitle: () => 'Mock Title'
        } as unknown as Page;

        const consoleLogSpy = sinon.spy(console, 'log');

        testPage(mockPage);
        assert(consoleLogSpy.calledWith('Testing page...'));
        assert(consoleLogSpy.calledWith('Mock Title'));

        consoleLogSpy.restore();
    });
});
