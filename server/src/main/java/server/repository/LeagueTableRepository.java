package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.model.Competition;
import server.model.LeagueTable;


public interface LeagueTableRepository extends JpaRepository<LeagueTable, Long> {
    LeagueTable findByLeagueCaption(String captionLeague);
    LeagueTable findByLeagueCaptionAndMatchday(String captionLeague,int matchDay);
}