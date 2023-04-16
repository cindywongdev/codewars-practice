SELECT alb.title, COUNT(tra.name)
FROM album alb
JOIN artist art
ON alb.artistid = art.artistid
JOIN track tra
ON alb.albumid = tra.albumid
WHERE art.name = 'metallica'
GROUP BY al.albumid order by al.albumid;