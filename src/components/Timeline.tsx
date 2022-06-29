import timeline from '@/projects/timeline.json';
import { Flex } from '@/system/flex';
import { styled } from 'stitches.config';

interface TimelineEntries {
  [key: string]: [
    {
      date: Date;
      url: string;
      title: string;
      description: string;
    },
  ];
}

const Table = styled('table', {
  fontFamily: '$olympic',
  width: '100%',
  minWidth: '100%',
  borderCollapse: 'initial',
  WebkitBorderHorizontalSpacing: '0',
});
const TableBody = styled('tbody', {
  width: '100%',
});
const TitleLink = styled('a', {
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '800',
  lineHeight: '10px',
});
const Description = styled('p', {
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: 'normal',
});
const Year = styled('div', {
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '600',
  paddingRight: '20px',
});

export const Timeline = () => {
  const orderedData = timeline
    .map(entry => ({ ...entry, date: new Date(entry.date) }))
    .sort((a, b) => a.date.valueOf() - b.date.valueOf())
    .reduce<TimelineEntries>((sections, currentValue) => {
      const year = currentValue.date.getFullYear().toString();
      if (sections[year] !== undefined) {
        sections[year].push(currentValue);
      } else {
        sections[year] = [currentValue];
      }

      return sections;
    }, {});

  return (
    <>
      <Table>
        <TableBody>
          {Object.keys(orderedData)
            .sort()
            .reverse()
            .map(year => {
              return orderedData[year].map((entry, index) => (
                <Flex css={{ flexDirection: 'row', minWidth: '100%' }}>
                  <tr key={`${year}-${index}`}>
                    {index === 0 ? (
                      <th>
                        <Year>{year}</Year>
                      </th>
                    ) : (
                      <td />
                    )}
                    <td>
                      <TitleLink href={entry.url}>{entry.title}</TitleLink>
                      <Description>{entry.description}</Description>
                    </td>
                  </tr>
                </Flex>
              ));
            })}
        </TableBody>
      </Table>
    </>
  );
};
